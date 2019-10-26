package org.launchcode.workforce.service;

import org.launchcode.workforce.model.Staff;
import org.launchcode.workforce.repository.StaffRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    private StaffRepository staffRepository;

    public StaffService(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    public List<Staff> getAll() {
        return staffRepository.findAll();
    }

    public Optional<Staff> get(Long id) {
        return staffRepository.findById(id);
    }

    public Staff add(Staff staff) {
        return staffRepository.save(staff);
    }

    public Optional<Staff> update(Staff staff) {
        if(staffRepository.existsById(staff.getId())){
            staffRepository.save(staff);
            return Optional.of(staff);
        }
        return Optional.empty();
    }

    public boolean delete(Long id) {
        if (staffRepository.existsById(id)) {
            staffRepository.deleteById(id);
            return true;
        }
        return false;
    }
}