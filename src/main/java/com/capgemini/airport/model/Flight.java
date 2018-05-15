package com.capgemini.airport.model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Flight{
    //variables for Flight
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private double fuel;
    private String departureAirport;
    private String destinationAirport;
    private double refillAmount;
}

