package edu.esprit.projetmicroservice.userauthservice.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    private String username;

    private String password;

    private String email;

    private Set<String> role;

    private String firstName;

    private String lastname;

    private String address;

    private String phone;

    private String about;
}
