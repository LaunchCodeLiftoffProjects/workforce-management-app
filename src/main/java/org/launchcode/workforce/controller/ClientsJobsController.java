package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.ClientsJobs;
import org.launchcode.workforce.service.ClientsJobsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients_jobs")
public class ClientsJobsController {

    private ClientsJobsService clientsJobsService;

    public ClientsJobsController(ClientsJobsService clientsJobsService) {
        this.clientsJobsService = clientsJobsService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    ClientsJobs add(@RequestBody ClientsJobs clientsJobs) {
        return clientsJobsService.add(clientsJobs);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    List<ClientsJobs> getAll() {
        return clientsJobsService.getAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<ClientsJobs> get(@PathVariable Long id) {
        Optional<ClientsJobs> clientsJobs = clientsJobsService.get(id);
        if (clientsJobs.isPresent()) {
            return ResponseEntity.ok().body(clientsJobs.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/location/{locationId}")
    List<ClientsJobs> getByLocation(@PathVariable Long locationId) {
        return clientsJobsService.getByLocation(locationId);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/client/{clientId}")
    List<ClientsJobs> getByClient(@PathVariable Long clientId) {
        return clientsJobsService.getByClient(clientId);
    }

    @PutMapping
    ResponseEntity<ClientsJobs> update(@RequestBody ClientsJobs newClientsJobs) {
        Optional<ClientsJobs> clientsJobs = clientsJobsService.update(newClientsJobs);
        if (clientsJobs.isPresent()) {
            return ResponseEntity.ok().body(clientsJobs.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (clientsJobsService.delete(id)) {
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    



}
