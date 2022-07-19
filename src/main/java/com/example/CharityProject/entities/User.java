package com.example.CharityProject.entities;

import com.example.CharityProject.enums.AccessLvlEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private AccessLvlEnum accessLvl;
    private String username;
    private String email;
    private String password;

    protected User() {}

    public User(Long userId, AccessLvlEnum accessLvl, String username, String email, String password) {
        this.userId = userId;
        this.accessLvl = accessLvl;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(AccessLvlEnum accessLvl, String username, String email, String password) {
        this.accessLvl = accessLvl;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
