package com.capgemini.airport.repository;

import com.capgemini.airport.model.Airplane;
import org.springframework.data.repository.CrudRepository;

public interface AirplaneRepository extends CrudRepository<Airplane, Integer> {
}
