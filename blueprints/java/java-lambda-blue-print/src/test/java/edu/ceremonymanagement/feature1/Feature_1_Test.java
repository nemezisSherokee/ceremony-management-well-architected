package edu.ceremonymanagement.feature1;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber-htmlreport", "json:target/cucumber-jsonreport"},
        features = {"src/test/resources/edu.ceremonymanagement.feature1"},
        glue={"edu.ceremonymanagement.feature1"},
        monochrome = true
)
public class Feature_1_Test {

}
