package com.capgemini.airport.repository;

import com.capgemini.airport.model.Airport;
import org.springframework.data.repository.CrudRepository;

public interface AirportRepository extends CrudRepository<Airport,Integer> {
}
