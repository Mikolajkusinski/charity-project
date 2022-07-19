package com.example.CharityProject.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long locationID;
    private String name;
    private String description;
    private Long latitude;
    private Long longitude;

    protected Location(){}

    public Location(Long locationID, String name, String description, Long latitude, Long longitude) {
        this.locationID = locationID;
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Location(String name, String description, Long latitude, Long longitude) {
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
