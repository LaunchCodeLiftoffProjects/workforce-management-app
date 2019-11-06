package org.launchcode.workforce.service;

import org.launchcode.workforce.model.Employer;
import org.launchcode.workforce.repository.EmployerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {

    private EmployerRepository employerRepository;

    public EmployerService(EmployerRepository employerRepository) {
        this.employerRepository = employerRepository;
    }

    public Employer add(Employer employer) {
        return employerRepository.save(employer);
    }

    public List<Employer> get() {
        return employerRepository.findAll();
    }

    public Optional<Employer> get(Long id) {
        return employerRepository.findById(id);
    }

    public Optional<Employer> update(Employer jobLocation) {
        if(employerRepository.existsById(jobLocation.getId())){
            employerRepository.save(jobLocation);
            return Optional.of(jobLocation);
        }
        return Optional.empty();
    }

    public boolean delete(Long id) {
        if(employerRepository.existsById(id)) {
            employerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
