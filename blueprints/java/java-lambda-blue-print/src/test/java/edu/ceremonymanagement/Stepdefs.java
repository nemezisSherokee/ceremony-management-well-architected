package edu.ceremonymanagement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.jupiter.api.Assertions;

import static org.junit.Assert.*;

class IsItFriday {
    static String isItFriday(String today) {
        return "Friday".equals(today) ? "TGIF" : "Nope";
    }
}

public class Stepdefs  {
    private String today;
    private String actualAnswer;

    ProcessingService processingService;
    InputObject in = null;

    @Given("today is {string}")
    public void today_is(String today) {
        this.today = today;
    }

    @Given("today is Sunday")
    public void today_is_Sunday() {
        today = "Sunday";
    }

    @Given("today is Friday")
    public void today_is_Friday() {
        today = "Friday";
    }

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

    @When("I ask whether it's Friday yet")
    public void i_ask_whether_it_s_Friday_yet() {
        actualAnswer = IsItFriday.isItFriday(today);
    }

    @Then("I should be told {string}")
    public void i_should_be_told(String expectedAnswer) {
        assertEquals(expectedAnswer, actualAnswer);
    }

}
