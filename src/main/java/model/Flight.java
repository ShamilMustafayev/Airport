package model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Flight{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String airline="XYZ airline";
    private String departure;
    private String destination;
}

