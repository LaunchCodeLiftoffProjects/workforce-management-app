package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.Staff;
import org.launchcode.workforce.service.StaffService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/staff")
public class StaffController {

    private StaffService staffService;

    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    Staff add(@RequestBody Staff staff) {
        return staffService.add(staff);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<Staff> getAll() {
        return staffService.getAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<Staff> get(@PathVariable Long id) {
        Optional<Staff> staff = staffService.get(id);
        if (staff.isPresent()) {
            return ResponseEntity.ok().body(staff.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/client/{clientId}")
    List<Staff> getByClientId(@PathVariable Long clientId) {
        //return staffService.getByClient(clientId);
        return null;
    }

   @PutMapping
    ResponseEntity<Staff> update(@RequestBody Staff newStaff) {
        Optional<Staff> staff = staffService.update(newStaff);
        if (staff.isPresent()) {
            return ResponseEntity.ok().body(staff.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (staffService.delete(id)) {
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }




}