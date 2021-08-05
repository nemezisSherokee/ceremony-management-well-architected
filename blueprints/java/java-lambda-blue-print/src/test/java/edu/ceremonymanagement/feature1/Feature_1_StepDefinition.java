package edu.ceremonymanagement.feature1;

import edu.ceremonymanagement.InputObject;
import edu.ceremonymanagement.ProcessingService;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;

import static org.junit.Assert.assertEquals;

public class Feature_1_StepDefinition {
    ProcessingService processingService;
    InputObject in = null;

    @When("I call the processing service with null input")
    public void i_call_the_processing_service_with_null_input() {
        processingService = new ProcessingService();
        in = null;
    }

    @Then("I should receive an exception {string}")
    public void i_should_receive_an_exception(String message) {
        Assertions.assertThrows(IllegalArgumentException.class, () -> {
                    processingService.process(in);
                },
                message);
    }

}
