#!/bin/bash
sleep 5
/usr/bin/conky -q -c ~/.config/conky/sysinfo_conkyrc
#/usr/bin/conky -q -c ~/.config/conky/kernlog_conkyrc
#/usr/bin/conky -q -c ~/.config/conky/gkeep_conkyrc
/usr/bin/conky -q -c ~/.config/conky/aliases_conkyrc
/usr/bin/conky -q -c ~/.config/conky/meteo_conkyrc
