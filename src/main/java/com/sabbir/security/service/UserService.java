package com.sabbir.security.service;

import com.sabbir.security.model.Authority;
import com.sabbir.security.model.User;
import com.sabbir.security.repository.AuthorityRepo;
import com.sabbir.security.repository.UserRepo;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class UserService {
    private final AuthorityRepo authorityRepo;
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserService(AuthorityRepo authorityRepo, UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.authorityRepo = authorityRepo;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User findUserByUsername(String username){
        return userRepo.findByUsernameIgnoreCase(username);
    }

    public String findUserProfileName(String username){
        return userRepo.findByUsernameIgnoreCase(username).getProfileName();
    }

    public Authority findAuthorityByAuthority(String authority){
        return authorityRepo.findByAuthority(authority);
    }

    public void saveStudent(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Authority authority = authorityRepo.findByAuthority("ROLE_STUDENT");
        user.getAuthorities().add(authority);
//        user.setAuthorities(Set.of(authority));
        userRepo.save(user);
    }

    public void saveUniversity(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Authority authority = authorityRepo.findByAuthority("ROLE_UNIVERSITY");
//        user.setAuthorities(Set.of(authority));
        user.getAuthorities().add(authority);
        userRepo.save(user);
    }
}
