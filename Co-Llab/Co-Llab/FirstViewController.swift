//
//  FirstViewController.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/14/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController {

    @IBOutlet weak var _loginUserPassword: UITextField!
    @IBOutlet weak var _logInUserEmail: UITextField!
    
    @IBOutlet weak var _errorMessage: UILabel!
    
    
    let logInCont = LogInController();
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func logInUser(sender: AnyObject) {
        logInCont.logInUser(_logInUserEmail.text, password: _loginUserPassword.text);
    }

}

