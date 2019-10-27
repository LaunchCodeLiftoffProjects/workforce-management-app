package org.launchcode.workforce.service;

import org.launchcode.workforce.model.StaffClients;
import org.launchcode.workforce.repository.StaffClientsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffClientsService {

    private StaffClientsRepository staffClientsRepository;

    public StaffClientsService(StaffClientsRepository staffClientsRepository) {
        this.staffClientsRepository = staffClientsRepository;
    }

    public List<StaffClients> getAll() {
        return staffClientsRepository.findAll();
    }

    public Optional<StaffClients> get(Long id) {
        return staffClientsRepository.findById(id);
    }

    public List<StaffClients> getByLocation(Long id) {
        return staffClientsRepository.findByStaffId(id);
    }

    public List<StaffClients> getByClient(Long id) {
        return staffClientsRepository.findByClientId(id);
    }

    public StaffClients add(StaffClients staffClients) {
        return staffClientsRepository.save(staffClients);
    }

    public Optional<StaffClients> update(StaffClients staffClients) {
        if(staffClientsRepository.existsById(staffClients.getId())){
            staffClientsRepository.save(staffClients);
            return Optional.of(staffClients);
        }
        return Optional.empty();
    }

    public boolean delete(Long id) {
        if (staffClientsRepository.existsById(id)) {
            staffClientsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}