package edu.ceremonymanagement;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import io.quarkus.amazon.lambda.test.LambdaClient;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import org.mockito.Mockito;
import static org.mockito.Mockito.when;

@QuarkusTest
class Test_Lambda_Handler {

    ProcessingService processingService;
    InputObject in;

    @BeforeEach
    public void initEach(){
        processingService = new ProcessingService();
        in = null;
    }

    @ParameterizedTest
    @ValueSource(strings = {"Stuart"})
    void and_not_nick_name_throws_exceptions(String name) throws Exception {
        var in = Mockito.mock(InputObject.class);
        when(in.getName()).thenReturn(name);
        when(in.getGreeting()).thenReturn("Hello");

        Throwable exceptionThatWasThrown = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            processingService.process(in);
        });
        Assertions.assertEquals("Can only greet nicknames", exceptionThatWasThrown.getMessage());
    }

    @ParameterizedTest
    @ValueSource(strings = {"goodbye"})
    void and_not_greetings_throws_exceptions(String greeting) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting(greeting);
        in.setName("Nemezis");

        Throwable exceptionThatWasThrown = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            processingService.process(in);
        });
        Assertions.assertEquals("Can only receive greetings", exceptionThatWasThrown.getMessage());
    }

    @ParameterizedTest
    @ValueSource(strings = {""})
     void and_not_empty_name_throws_exceptions(String name) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting("hello");
        in.setName(name);

        Throwable exceptionThatWasThrown = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            processingService.process(in);
        });
        Assertions.assertEquals("Cannot handle empty names", exceptionThatWasThrown.getMessage());
    }

    @ParameterizedTest
    @ValueSource(strings = {""})
    void and_not_empty_greeting_throws_exceptions(String grettings) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting(grettings);
        in.setName("Nemezis");

        Throwable exceptionThatWasThrown = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            processingService.process(in);
        });
        Assertions.assertEquals("Cannot handle empty grettings", exceptionThatWasThrown.getMessage());
    }

    @ParameterizedTest
    @ValueSource(strings = {""})
    void and_null_input_throws_exceptions(String grettings) throws Exception {
        InputObject in = null;
        Throwable exceptionThatWasThrown = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            processingService.process(in);
        });
        Assertions.assertEquals("Cannot handle null inputs", exceptionThatWasThrown.getMessage());
    }

    @Test
    void and_greeting_with_name_return_HELLO_Name() throws Exception {
        InputObject in = new InputObject();
        in.setGreeting("Hello");
        in.setName("Stu");
        var out = processingService.process(in);
        Assertions.assertEquals("Hello Stu", out.getResult());
    }

    @Test
    void and_successfull_called_lambda_return_request_id() throws Exception {
        InputObject in = new InputObject();
        in.setGreeting("Hello");
        in.setName("Stu");
        OutputObject out = LambdaClient.invoke(OutputObject.class, in);
        Assertions.assertTrue(out.getRequestId().matches("aws-request-\\d"), "Expected requestId as 'aws-request-<number>'");
    }

}
