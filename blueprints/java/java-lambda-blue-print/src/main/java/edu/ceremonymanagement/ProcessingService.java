package edu.ceremonymanagement;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ProcessingService {

    private static final String CAN_ONLY_GREET_NICKNAMES = "Can only greet nicknames";
    private static final String CAN_ONLY_RECEIVE_GREETINGS = "Can only receive greetings";
    private static final String CANNOT_HANDLE_EMPTY_NAMES = "Cannot handle empty names";
    private static final String CANNOT_HANDLE_EMPTY_GREETINGS = "Cannot handle empty grettings";
    private static final String CANNOT_HANDLE_NULL_INPUTS = "Cannot handle null inputs";

    public OutputObject process(InputObject input) {
        if (input == null) {
            throw new IllegalArgumentException(CANNOT_HANDLE_NULL_INPUTS);
        }

        if (input.getName().isBlank() || input.getName().isEmpty()) {
            throw new IllegalArgumentException(CANNOT_HANDLE_EMPTY_NAMES);
        }

        if (input.getGreeting().isBlank() || input.getGreeting().isEmpty()) {
            throw new IllegalArgumentException(CANNOT_HANDLE_EMPTY_GREETINGS);
        }

        if (input.getName().equals("Stuart")) {
            throw new IllegalArgumentException(CAN_ONLY_GREET_NICKNAMES);
        }

        if (!input.getGreeting().equalsIgnoreCase("hello")) {
            throw new IllegalArgumentException(CAN_ONLY_RECEIVE_GREETINGS);
        }

        String result = input.getGreeting() + " " + input.getName();
        var out = new OutputObject();
        out.setResult(result);
        return out;
    }
}
