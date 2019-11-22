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

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name= "phone")
    private String phone;

    
}
