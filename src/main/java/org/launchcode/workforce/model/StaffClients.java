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

public class StaffClients {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "staffId")
    private Long staffId;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "startDate")
    private Date startDate;
}
