//
//  SearchHelper.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/15/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

var collections = Collections()

class SearchHelper: NSObject {
    
    func returnSearchResults(searchTerm:String!) -> [User]{
        
        if searchTerm == "" {
            return collections.users
        }
        
        var users = collections.users
        var rtrnUsers:[User] = []
        
        let predicate:NSPredicate! = NSPredicate(format: "name contains[c] %@", searchTerm)
       
        
        return NSArray(array: users).filteredArrayUsingPredicate(predicate) as AnyObject as [User]
        
//        for user in users {
//            if NSString(string: user._name).containsString(searchTerm) {
//                rtrnUsers.append(user)
//            }
//        }
//        
//        return rtrnUsers
    }
}
