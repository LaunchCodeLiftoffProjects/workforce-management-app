package org.launchcode.workforce.controller;
import org.launchcode.workforce.service.ClientService;
import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.model.TimeStamp;
import org.launchcode.workforce.service.TimeStampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//make this so that it is just one page and one address with a query for the ID
//Post and get consideration

//start to map out what is going to display the clock stamps from the past
//start with displaying all the dates

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/timeclock")
public class TimeStampController {

    private TimeStampService timeStampService;

    private ClientService clientService;

    public TimeStampController(TimeStampService timeStampService) {
        this.timeStampService = timeStampService;
    }

    // change this to {id} to add a new time stamp
    @PostMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public TimeStamp add(@RequestBody Long id) {
        // validate before creation...???
        return timeStampService.add(id);
        }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    //once working make it so that this doesn't display ALL timestamps (why would we want all the stamps...)
    List<TimeStamp> getAll() {
        return timeStampService.getAll();
    }

    //adjust to only provide within a certain date range
    @GetMapping("/{id}")
    ResponseEntity<TimeStamp> get(@PathVariable Long id) {

        Optional<Client> client = clientService.get(id);
        if (client.isPresent()) {
            Client clientIs = clientService.getClient(id);
            ArrayList<TimeStamp> timeStampArrayList = timeStampService.getByClient(clientIs);
            if (timeStampArrayList.isEmpty()) {
                return ResponseEntity.notFound().build();


            } else {
                int holder = timeStampArrayList.size() - 1;
                TimeStamp stamp = timeStampArrayList.get(holder);
                System.out.println(stamp);
                return ResponseEntity.ok().body(stamp);
            }
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
}
