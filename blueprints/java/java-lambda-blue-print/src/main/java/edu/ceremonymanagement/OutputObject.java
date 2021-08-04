package edu.ceremonymanagement;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OutputObject {

    private String result;
    private String requestId;

    public OutputObject setResult(String result) {
        this.result = result;
        return this;
    }

    public OutputObject setRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}
