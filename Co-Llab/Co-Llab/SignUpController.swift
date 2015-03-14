//
//  SignUpController.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/14/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class SignUpController: NSObject {
    // Constants
    let URL = "https://co-llab.herokuapp.com/signup"
    
    var userDic:[String:String] = [String:String]();
    
    
    func signUpUser(email:String!, password:String!) {
        
        let manager = AFHTTPRequestOperationManager()
        manager.requestSerializer = AFJSONRequestSerializer(writingOptions: nil)
        
        //Contrary to user1805458's solution, I did not need to use these two instructions below using Swift.
        manager.requestSerializer.setValue("Application/JSON", forHTTPHeaderField:"Content-Type")
        manager.requestSerializer.setValue("Application/JSON", forHTTPHeaderField:"Accept")
        
        userDic["email"] = email
        userDic["password"] = password
        
        
        manager.POST(URL,
            parameters: userDic,
            success: { (operation, obj) in
                print(obj);
            }, failure: { (operation, err) in
                print(operation.responseString)
                print(err.localizedDescription)
        });
    }
}
