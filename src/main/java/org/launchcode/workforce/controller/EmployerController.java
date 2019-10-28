package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.Employer;
import org.launchcode.workforce.service.EmployerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employer")
public class EmployerController {

    private EmployerService employerService;

    public EmployerController(EmployerService employerService) {
        this.employerService = employerService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    Employer add(@RequestBody Employer employer) {
        return employerService.add(employer);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<Employer> getAll() {
        return employerService.get();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    ResponseEntity<Employer> get(@PathVariable Long id) {
        Optional<Employer> jobLocation = employerService.get(id);
        if (jobLocation.isPresent()) {
            return ResponseEntity.ok().body(jobLocation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping
    ResponseEntity<Employer> update(@RequestBody Employer newEmployer) {
        Optional<Employer> jobLocation = employerService.update(newEmployer);
        if (jobLocation.isPresent()) {
            return ResponseEntity.ok().body(jobLocation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("{id}")
    ResponseEntity<?> delete(@PathVariable Long id) {
        if(employerService.delete(id)){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
