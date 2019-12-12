package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.model.TimeStamp;
import org.launchcode.workforce.service.TimeStampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/timeclock")
public class TimeStampController {

    private TimeStampService timeStampService;

    public TimeStampController(TimeStampService timeStampService) {
        this.timeStampService = timeStampService;
    }



    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    public TimeStamp add(@RequestBody Client client) {
        long clientId = client.getId();
        return timeStampService.add(clientId, client);
        }

    //changing this to output clients previous stamps into a table
    @GetMapping("stamp/{clientId}")
    @ResponseStatus(HttpStatus.OK)
    List<TimeStamp> getByClientId(@RequestBody Long clientId) {
        return timeStampService.getByClientId(clientId);
    }



    @GetMapping("/{clientId}")
    ResponseEntity<TimeStamp> get(@PathVariable Long clientId) {

        ArrayList<TimeStamp> timeStamps = timeStampService.getByClientId(clientId);
        if (timeStamps.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        else{
            int holder = timeStamps.size() -1;
            TimeStamp stamp = timeStamps.get(holder);
            return ResponseEntity.ok(stamp);
        }
    }
}
