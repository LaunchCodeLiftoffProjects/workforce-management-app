package org.launchcode.workforce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Table
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimeStamp {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "clientState")
    private String clientState;

    @Column(name = "timeStamp")
    private Date timeStamp;

    public TimeStamp(@NotNull Long clientId, String clientState, Date timeStamp) {
        this.clientId = clientId;
        this.clientState = clientState;
        this.timeStamp = timeStamp;
    }
}