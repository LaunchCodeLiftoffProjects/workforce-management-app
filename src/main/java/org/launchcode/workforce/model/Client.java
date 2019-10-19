package org.launchcode.workforce.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "client")
@Entity
public class Client {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "firstname")
    private String name;

    @Column(name = "lastname")
    private String lastname;
}


