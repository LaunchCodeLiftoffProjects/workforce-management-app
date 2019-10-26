package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.StaffClients;
import org.launchcode.workforce.service.StaffClientsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/staff_clients")
public class StaffClientsController {

    private StaffClientsService staffClientsService;

    public StaffClientsController(StaffClientsService staffClientsService) {
        this.staffClientsService = staffClientsService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    StaffClients add(@RequestBody StaffClients clientsJobs) {
        return staffClientsService.add(clientsJobs);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<StaffClients> getAll() {
        return staffClientsService.getAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<StaffClients> get(@PathVariable Long id) {
        Optional<StaffClients> staffClients = staffClientsService.get(id);
        if (staffClients.isPresent()) {
            return ResponseEntity.ok().body(staffClients.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/staff/{staffId}")
    List<StaffClients> getByLocation(@PathVariable Long staffId) {
        return staffClientsService.getByLocation(staffId);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/client/{clientId}")
    List<StaffClients> getByClient(@PathVariable Long clientId) {
        return staffClientsService.getByClient(clientId);
    }

    @PutMapping
    ResponseEntity<StaffClients> update(@RequestBody StaffClients newStaffClients) {
        Optional<StaffClients> staffClients = staffClientsService.update(newStaffClients);
        if (staffClients.isPresent()) {
            return ResponseEntity.ok().body(staffClients.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (staffClientsService.delete(id)) {
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }


}
