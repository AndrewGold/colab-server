//
//  LogInController.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/14/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class LogInController: NSObject {
    // Constants
    let URL = "https://co-llab.herokuapp.com/login"
    
    var userDic:[String:String] = [String:String]();
    
    func logInUser(email:String!, password:String!) {
        
        let manager = AFHTTPRequestOperationManager();
    
        manager.responseSerializer = AFJSONResponseSerializer();
        
        manager.responseSerializer.acceptableContentTypes = NSSet(object: "text/html");
        
        
        userDic["email"] = email;
        userDic["password"] = password;
        
        
        manager.POST(URL,
            parameters: userDic,
            success: { (operation, obj) in
                print(obj);
            }, failure: { (operation, err) in
                print(err)
        });
        
    }
}
