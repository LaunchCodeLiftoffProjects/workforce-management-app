package org.launchcode.workforce.service;

import lombok.Getter;
import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }
    public List<Client> getAll(){
        return clientRepository.findAll();
    }

    public Optional<Client> get(Long id) {
        return clientRepository.findById(id);
    }
    public Client getClient(Long id) { return  clientRepository.getOne(id);}
    public Client addClient(Client client){
        return clientRepository.save(client);
    }
    public Optional<Client> update(Client client) {
        if(clientRepository.existsById(client.getId())){
            clientRepository.save(client);
            return Optional.of(client);
        }
        return Optional.empty();
    }
    public boolean delete(Long id) {
        if (clientRepository.existsById(id)) {
            clientRepository.deleteById(id);
            return true;
        }
        return false;
    }
}