package com.capgemini.airport.repository;

import com.capgemini.airport.model.Flight;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightRepository extends CrudRepository <Flight,Integer>{
}
