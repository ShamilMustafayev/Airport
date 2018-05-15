package controller;

import model.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import repository.FlightRepository;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/flight")

    public class FlightController {
    private static ArrayList<Flight> flightItems = new ArrayList<>();

    @Autowired
    private FlightRepository flightItemRepository;

    @GetMapping("/")
    public Iterable<Flight> getFlightItem()
    {return flightItemRepository.findAll();}

    @GetMapping("/{id}")
    public Flight getFlightItemByID(@PathVariable int id){
        Optional <Flight> flightItem = flightItemRepository.findById(id);

        if (flightItem.isPresent()) {
            return flightItem.get();
        }
        return null;
    }

    @PostMapping("/add")
    public Flight registerFlightItem(@RequestBody Flight flight){
        System.out.println(flight);
        flightItems.add(flight);
        return flightItemRepository.save(flight);
    }
}
