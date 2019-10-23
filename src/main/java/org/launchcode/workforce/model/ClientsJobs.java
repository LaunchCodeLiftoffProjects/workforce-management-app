package org.launchcode.workforce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Table
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ClientsJobs {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "locationId")
    private Long locationId;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "startDate")
    private Date startDate;
}
