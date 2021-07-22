package com.elearning.projectuob.recommender.engine.dao;

import org.grouplens.lenskit.core.Parameter;

import javax.inject.Qualifier;
import java.io.File;
import java.lang.annotation.*;


@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
@Qualifier
@Parameter(File.class)
public @interface TitleFile {
}
