package org.launchcode.workforce.service;

import org.launchcode.workforce.model.JobLocation;
import org.launchcode.workforce.repository.JobLocationRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.util.List;
import java.util.Optional;

@Service
public class JobLocationService {

    private JobLocationRepository jobLocationRepository;

    public JobLocationService(JobLocationRepository jobLocationRepository) {
        this.jobLocationRepository = jobLocationRepository;
    }

    public JobLocation add(JobLocation jobLocation) {
        return jobLocationRepository.save(jobLocation);
    }

    public List<JobLocation> get() {
        return jobLocationRepository.findAll();
    }

    public Optional<JobLocation> get(Long id) {
        return jobLocationRepository.findById(id);
    }

    public Optional<JobLocation> update(JobLocation jobLocation) {
        if(jobLocationRepository.existsById(jobLocation.getId())){
            jobLocationRepository.save(jobLocation);
            return Optional.of(jobLocation);
        }
        return Optional.empty();
    }

    public boolean delete(Long id) {
        if(jobLocationRepository.existsById(id)) {
            jobLocationRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
