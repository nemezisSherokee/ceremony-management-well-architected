package edu.ceremonymanagement;

import io.quarkus.amazon.lambda.test.LambdaException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import io.quarkus.amazon.lambda.test.LambdaClient;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

@QuarkusTest
public class Test_Lambda_Handler {

    //@Test
    @ParameterizedTest
    @ValueSource(strings = {"Stuart"})
    public void and_not_nick_name_throws_exceptions(String name) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting("Hello");
        in.setName(name);
        Assertions.assertThrows(LambdaException.class, () -> {
            LambdaClient.invoke(OutputObject.class, in);
        }, "Can only greet nicknames");
    }

    @ParameterizedTest
    @ValueSource(strings = {"goodbye"})
    public void and_not_greetings_throws_exceptions(String greeting) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting(greeting);
        in.setName("Nemezis");

        Assertions.assertThrows(LambdaException.class, () -> {
            LambdaClient.invoke(OutputObject.class, in);
        },
                "Can only receive greetings");
    }

    @ParameterizedTest
    @ValueSource(strings = {""})
    public void and_not_empty_name_throws_exceptions(String name) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting("hello");
        in.setName(name);

        Assertions.assertThrows(LambdaException.class, () -> {
                    LambdaClient.invoke(OutputObject.class, in);
                },
                "Cannot handle empty names");
    }

    @ParameterizedTest
    @ValueSource(strings = {""})
    public void and_not_empty_greeting_throws_exceptions(String grettings) throws Exception {
        InputObject in = new InputObject();
        in.setGreeting(grettings);
        in.setName("Nemezis");

        Assertions.assertThrows(LambdaException.class, () -> {
                    LambdaClient.invoke(OutputObject.class, in);
                },
                "Cannot handle empty grettings");
    }

    @ParameterizedTest
    @ValueSource(strings = {""})
    public void and_null_input_throws_exceptions(String grettings) throws Exception {
        InputObject in = null;
        Assertions.assertThrows(LambdaException.class, () -> {
                    LambdaClient.invoke(OutputObject.class, in);
                },
                "Cannot handle null inputs");
    }

    @Test
    public void and_greeting_with_name_return_HELLO_Name() throws Exception {
        InputObject in = new InputObject();
        in.setGreeting("Hello");
        in.setName("Stu");
        OutputObject out = LambdaClient.invoke(OutputObject.class, in);
        Assertions.assertEquals("Hello Stu", out.getResult());
        Assertions.assertTrue(out.getRequestId().matches("aws-request-\\d"), "Expected requestId as 'aws-request-<number>'");
    }

}
