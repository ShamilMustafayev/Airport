package com.capgemini.airport.controller;

import com.capgemini.airport.model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.capgemini.airport.repository.FlightRepository;

import java.util.ArrayList;
import java.util.Optional;

@RestController
//mapping for the javascript
@RequestMapping("/api/flight")
    public class FlightController {

    //creating a new list of Flights
    private static ArrayList<Flight> flightItems = new ArrayList<>();

    @Autowired
    //creating a new repository connection
    private FlightRepository flightItemRepository;

    @GetMapping("/")
    //used for getting all items in the list
    public Iterable<Flight> getFlightItem()
    {return flightItemRepository.findAll();}

    @GetMapping("/{id}")
    //may be used to look for flights with particular ID
    public Flight getFlightItemByID(@PathVariable int id){
        Optional <Flight> flightItem = flightItemRepository.findById(id);
        //checking if the list is not empty
        if (flightItem.isPresent()) {
            return flightItem.get();
        }
        return null;
    }

    @PostMapping("/add")
    //post mapping function used to add flights to the list
    public Flight registerFlightItem(@RequestBody Flight flight){
        System.out.println(flight);
        flightItems.add(flight);
        return flightItemRepository.save(flight);
    }

    @GetMapping("/remove/{id}")
    //function for removal of flights if necessart
    public void removeFlight(@PathVariable int id){
    flightItemRepository.deleteById(id);
    }
}
