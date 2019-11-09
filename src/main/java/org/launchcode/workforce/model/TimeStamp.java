package org.launchcode.workforce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Table
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimeStamp {

    @Id
    @GeneratedValue
    @Column(name = "tid")
    private Long id;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name= "DateTime")
    private Date stamp;

    //TODO insert client ID here foreign key from client table
    //@ManyToOne
    //will this generate the client ID as a foreign key?

}