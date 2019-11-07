package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.TimeStamp;
import org.launchcode.workforce.service.TimeStampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/timeClock")
public class TimeStampController {

    private TimeStampService timeStampService;

    public TimeStampController(TimeStampService timeStampService) {
        this.timeStampService = timeStampService;
    }

    @PostMapping("/clock")
    @ResponseStatus(HttpStatus.OK)
    TimeStamp add(@RequestBody Long clientId) {
        return timeStampService.add(clientId);
        }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<TimeStamp> getAll() {
        return timeStampService.getAll();
    }

    //adjust to only provide within a certain date range
    @GetMapping("/{id}")
    ResponseEntity<TimeStamp> get(@PathVariable Long id) {
        List<TimeStamp> timeStamp = timeStampService.getByClient(id);
        if (timeStamp.indexOf(0) == -1) {
            //modify to allow for a first clock in
            return ResponseEntity.notFound().build();

        }
        else {
            return ResponseEntity.ok().body(timeStamp.get(Math.toIntExact(id)));
        }

    }
}
