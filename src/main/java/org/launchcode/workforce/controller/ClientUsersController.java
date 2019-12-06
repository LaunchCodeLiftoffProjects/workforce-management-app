package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/client")
public class ClientUsersController {
    private ClientService clientService;

    public ClientUsersController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Client> getAll() {
        return clientService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public Client addNew(@RequestBody Client client) {
        return clientService.addClient(client);
    }

    @GetMapping("/{id}")
    ResponseEntity<Client> get(@PathVariable Long id) {
        Optional<Client> client = clientService.get(id);

        if (client.isPresent()) {
            return ResponseEntity.ok().body(client.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    ResponseEntity<Client> update(@RequestBody Client newClient) {
        Optional<Client> staffClients = clientService.update(newClient);
        if (staffClients.isPresent()) {
            return ResponseEntity.ok().body(staffClients.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (clientService.delete(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}