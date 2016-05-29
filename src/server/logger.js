import config from 'config';
import { configure, connectLogger, getLogger, levels } from 'log4js';

configure(config.get('log4js'));

export const access = getLogger('access');
export const error = getLogger('error');
export const system = getLogger('system');

export const express = connectLogger(access, { level: levels.INFO });
