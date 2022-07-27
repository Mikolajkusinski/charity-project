package com.example.CharityProject.services;

import com.example.CharityProject.entities.User;
import com.example.CharityProject.enums.AccessLvlEnum;
import com.example.CharityProject.requests.RegistrationRequest;
import com.example.CharityProject.validators.EmailValidator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserService userService;

    private EmailValidator emailValidator;
    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());

        if(!isValidEmail){
            throw new IllegalStateException("email not valid");
        }

        return userService.signUpUser(new User(
                request.getUsername(),
                request.getPassword(),
                request.getEmail(),
                AccessLvlEnum.ADMIN
        ));
    }
}
