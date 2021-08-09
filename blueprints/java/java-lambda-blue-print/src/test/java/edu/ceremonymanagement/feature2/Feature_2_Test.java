package edu.ceremonymanagement.feature2;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber-htmlreport", "json:target/cucumber-jsonreport"},
        features = {"src/test/resources/edu.ceremonymanagement.feature2"},
        glue={"edu.ceremonymanagement.feature2"},
        monochrome = true
)
public class Feature_2_Test {

}
