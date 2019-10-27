package org.launchcode.workforce.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "client")
@Entity

public class ClientName {
    @Id
    @GeneratedValue
    @Column(name= "id")
    private Long id;

    @Column(name = "name")
    private String name;

    public Long getId() {
        return id;
    }
}




