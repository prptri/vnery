const express = require("express");
const router = express.Router();
const presets = require("../../Presets");
const connection = require("../../db_connection");

// Gets All Presets
// The main page show all preset that we have
//router.get('/', (req, res) => {
//Connect to DB
//Query all the preset and show each preset deatail in DataBase;
//Show all the presets that we have in Database
//});

// Get Single Preset
//router.get('/', (req, res) => {
//Connect to DB
//Render the Presets page with all the setting from DB

//tutorial------------------------------------------------------------------------------------
/*const found = presets.some(preset => preset.preset_id ===  parseInt(req.params.preset_id));
    if(found){
        res.json(presets.filter(preset => preset.preset_id === parseInt(req.params.preset_id)));
    } else {
        res.status(400).json({ msg: `No preset with the id of ${req.params.preset_id}`});
    }*/
//});

// Create Presets
//router.post('/', (req, res) => {
//Connect to DB
//Create Presets
//Upload new Presets to DB.
//In this preset_id set status to active
//The other preset_id set to inactive
//Send the setup of the preset --> Python Server.
//Render the finish setup page

/*const newPreset = {
        "preset_id": req.body.preset_id,
        "ip_address": req.body.ip_address,
        "screen_name": req.body.screen_name,
        "screen_width": req.body.screen_width,
        "screen_height": req.body.screen_height,
        "screen_diagonal": req.body.screen_diagonal,
        "point_xtop": req.body.point_xtop,
        "point_yleft": req.body.point_yleft,
        "status": "active"
    }

    if(!newPreset.preset_id){
        return res.status(400).json({ msg: `You can't create the new preset`});
    }

    presets.push(newPreset);
    res.json(presets);*/
//});

// Get Single Preset
//router.put('/:preset_id', (req, res) => {
//Connect to DB
//Render the Presets page with all the setting from DB

/*
    const found = presets.some(preset => preset.preset_id ===  parseInt(req.params.preset_id));
    if(found){
        const updPreset = req.body;
        presets.forEach(preset => {
            if(preset.preset_id === parseInt(req.params.id)) {
                preset.ip_address = updPreset.ip_address ? updPreset.ip_address : preset.ip_address;
                preset.screen_name = updPreset.screen_name ? updPreset.screen_name : preset.screen_name;
                preset.screen_width = updPreset.screen_width ? updPreset.screen_width : preset.screen_width;
                preset.screen_height = updPreset.screen_height ? updPreset.screen_height : preset.screen_height;
                preset.screen_diagonal = updPreset.screen_diagonal ? updPreset.screen_diagonal : preset.screen_diagonal;
                preset.point_xtop = updPreset.point_xtop ? updPreset.point_xtop : preset.point_xtop;
                preset.point_yleft = updPreset.point_yleft ? updPreset.point_yleft : preset.point_yleft;
            }
        })
    } else {
        res.status(400).json({ msg: `No preset with the id of ${req.params.preset_id}`});
    }*/
//});

// Delete Presets
//router.delete('/:preset_id', (req, res) => {
//Connect to DB
//Render the Presets page with all the setting from DB

/*const found = presets.some(preset => preset.preset_id ===  parseInt(req.params.preset_id));
    if(found){
        res.json({
            msg: 'preset deleted',
            res.json(presets.filter(preset => preset.preset_id === parseInt(req.params.preset_id)));
        })
    } else {
        res.status(400).json({ msg: `No preset with the id of ${req.params.preset_id}`});
    }*/
//});

module.exports = router;
