package org.launchcode.workforce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Optional;

@Table(name = "TimeStamp")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimeStamp {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

//    @ManyToOne
//    @JoinColumn(name="client")
//    private Client client;

    @NotNull
    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "clientState")
    private boolean clientState;

    @Column(name = "stamp")
    private Date stamp;




    public TimeStamp(Long clientId){
    }

    public TimeStamp(Long clientId, boolean clientState, Date stamp) {
        this.clientId = clientId;
        this.clientState = clientState;
        this.stamp = stamp;
    }
}