package org.launchcode.workforce.service;

import org.launchcode.workforce.model.ClientName;
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
    public List<ClientName> getAll(){
        return clientRepository.findAll();
    }

    public Optional<ClientName> get(Long id) {
        return clientRepository.findById(id);
    }
    public ClientName addClientName(ClientName clientName){
        return clientRepository.save(clientName);
    }
    public Optional<ClientName> update(ClientName clientName) {
        if(clientRepository.existsById(clientName.getId())){
            clientRepository.save(clientName);
            return Optional.of(clientName);
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



