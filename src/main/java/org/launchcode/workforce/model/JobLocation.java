package org.launchcode.workforce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobLocation {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "employer")
    private String employer;

    @Column(name = "address")
    private String address;

    public Long getId() {
        return id;
    }
}
