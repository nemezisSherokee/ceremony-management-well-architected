package edu.ceremonymanagement;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ProcessingService {

    public static final String CAN_ONLY_GREET_NICKNAMES = "Can only greet nicknames";
    public static final String CAN_ONLY_RECEIVE_GREETINGS = "Can only receive greetings";
    public static final String CANNOT_HANDLE_EMPTY_NAMES = "Cannot handle empty names";
    public static final String CANNOT_HANDLE_EMPTY_GREETINGS = "Cannot handle empty grettings";
    public static final String CANNOT_HANDLE_NULL_INPUTS = "Cannot handle null inputs";

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

        if (!input.getGreeting().toLowerCase().equals("hello")) {
            throw new IllegalArgumentException(CAN_ONLY_RECEIVE_GREETINGS);
        }

        String result = input.getGreeting() + " " + input.getName();
        OutputObject out = new OutputObject();
        out.setResult(result);
        return out;
    }
}
