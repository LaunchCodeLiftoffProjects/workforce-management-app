package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.JobLocation;
import org.launchcode.workforce.service.JobLocationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Null;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/job_location")
public class JobLocationController {

    private JobLocationService jobLocationService;

    public JobLocationController(JobLocationService jobLocationService) {
        this.jobLocationService = jobLocationService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    JobLocation add(@RequestBody JobLocation jobLocation) {
        return jobLocationService.add(jobLocation);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<JobLocation> getAll() {
        return jobLocationService.get();
    }

    @GetMapping("/{id}")
    ResponseEntity<JobLocation> get(@PathVariable Long id) {
        Optional<JobLocation> jobLocation = jobLocationService.get(id);
        if (jobLocation.isPresent()) {
            return ResponseEntity.ok().body(jobLocation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    ResponseEntity<JobLocation> update(@RequestBody JobLocation newJobLocation) {
        Optional<JobLocation> jobLocation = jobLocationService.update(newJobLocation);
        if (jobLocation.isPresent()) {
            return ResponseEntity.ok().body(jobLocation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    ResponseEntity<?> delete(@PathVariable Long id) {
        if(jobLocationService.delete(id)){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }


}
