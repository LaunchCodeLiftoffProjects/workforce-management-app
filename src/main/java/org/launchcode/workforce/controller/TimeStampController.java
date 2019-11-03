package org.launchcode.workforce.controller;

import org.launchcode.workforce.service.TimeStampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/timeClock")
public class TimeStampController {

    private TimeStampService timeStampService;

    public TimeStampController(TimeStampService timeStampService) {
        this.timeStampService = timeStampService;
    }

    //how will you label between clock in and clock out
    @PostMapping("/clock")
    @ResponseStatus(HttpStatus.OK)
    TimeStamp add(@RequestBody TimeStamp timeStamp) {
        return timeStampService.add(timeStamp);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<TimeStamp> getAll() {
        return timeStampService.getAll();
    }


    //adjust to only provide within a certain date range
    @GetMapping("/{id}")
    ResponseEntity<TimeStamp> get(@PathVariable Long clientId) {
        Optional<TimeStamp> timeStamp = timeStampService.get(clientId);
        if (timeStamp.isPresent()) {
            return ResponseEntity.ok().body(timeStamp.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }

    }
}
