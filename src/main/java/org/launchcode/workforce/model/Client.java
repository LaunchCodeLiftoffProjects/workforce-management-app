package org.launchcode.workforce.model;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "client")
@Entity

public class Client {
    @Id
    @GeneratedValue
    @Column(name= "id")
    private Long id;

    @Column(name = "name")
    private String name;


    
}
